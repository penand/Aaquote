import http from "../http-client";

export type QuoteType = {
    author: string;
    category: string;
    title: string;
    image_url: string;
    used: Boolean;
    created_at: Date;
}

class DataService {
    getAll() {
        return http.get("/quotes");
    };

    get(id: string) {
        return http.get(`/quotes/${id}`);
    }

    create(data: QuoteType) {
        return http.post('/quotes', data);
    }

    update(id: string, data: QuoteType){
        return http.put(`/quotes/${id}`, data);
    }

    delete(id: string){
        return http.delete(`/quotes/${id}`);
    }
}

export default new DataService();