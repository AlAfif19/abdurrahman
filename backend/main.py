try:
    from fastapi import FastAPI
except ImportError:
    FastAPI = None


if FastAPI is not None:
    app = FastAPI(title="Al Afif Abdurrahman Portfolio")

    @app.get("/health")
    def health():
        return {"status": "ok"}
else:
    app = None
