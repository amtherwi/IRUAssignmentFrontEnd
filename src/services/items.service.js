import http from "../http-common";

class ItemsService {

    getItemsByColorCode(){
        return http.get("/api/IruAssignment/items",{
        headers: {
            "Content-Type": "application/json",
          }
        });
    }
    getItemDetails(ColorCode){
        return http.get("/api/IruAssignment/items/" + ColorCode, {
            headers: {
              "Content-Type": "application/json",
            }
        });
    }

}

export default new ItemsService();