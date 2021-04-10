import http from "../http-common";

class ImportDataService {
  import(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/api/IruAssignment/Import", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  getItems() {
    return http.get("/files");
  }
}

export default new ImportDataService();