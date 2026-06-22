#!/bin/sh
echo "=== 容器调试工具箱 ==="
echo "可用工具: curl, wget, nc, nslookup, dig, htop, vim"
echo ""
echo "容器信息:"
echo "  Hostname: $(hostname)"
echo "  IP: $(hostname -i)"
echo "  OS: $(cat /etc/os-release | head -1)"
echo ""

case "$1" in
  shell)
    echo "进入交互式 shell..."
    exec /bin/sh
    ;;
  check)
    shift
    echo "检查: $@"
    curl -sI "$@" | head -5
    ;;
  *)
    echo "用法:"
    echo "  docker run -it demo-93-debug shell    # 交互式 shell"
    echo "  docker run demo-93-debug check URL     # 检查 URL"
    ;;
esac
