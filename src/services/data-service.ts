import http from "../http-client";

export type QuoteType = {
    author: string;
    category: string;
    title: string;
    image_url: string;
    used: Boolean;
    created_at: Date;
}

const getAll = () => {
    return http.get("/quotes");
};

const get = (id: string) => {
    return http.get(`/quotes/${id}`);
}

const create = (data: QuoteType) => {
    return http.post('/quotes', data);
}

const update = (id: string, data: QuoteType) => {
    return http.put(`/quotes/${id}`, data);
}

const remove = (id: string) => {
    return http.delete(`/quotes/${id}`);
}

export { getAll, get, create, update, remove }