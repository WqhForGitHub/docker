import requests
from bs4 import BeautifulSoup
import json
import time


def crawl(url):
    """抓取网页标题和所有链接"""
    try:
        resp = requests.get(url, timeout=10, headers={"User-Agent": "Mozilla/5.0"})
        soup = BeautifulSoup(resp.text, "html.parser")
        title = soup.title.string if soup.title else "无标题"
        links = [a.get("href") for a in soup.find_all("a", href=True)][:10]
        result = {"url": url, "title": title, "links": links}
        print(json.dumps(result, ensure_ascii=False, indent=2))
        return result
    except Exception as e:
        print(f"抓取失败: {url} - {e}")
        return None


if __name__ == "__main__":
    urls = ["https://httpbin.org/html", "https://example.com"]
    for url in urls:
        print(f"\n--- 抓取: {url} ---")
        crawl(url)
        time.sleep(1)
    print("\n爬虫任务完成")
