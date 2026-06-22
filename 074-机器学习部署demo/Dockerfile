FROM python:3.11-slim
WORKDIR /app
ENV MODEL_PATH=/app/model.pkl
ENV ML_FRAMEWORK=sklearn
ENV BATCH_SIZE=32
ENV PYTHONUNBUFFERED=1
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY model.py ./
COPY app.py ./
EXPOSE 5000
CMD ["python", "app.py"]
