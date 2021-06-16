
const dev = {
    Api : {
        API_URL : "http://127.0.0.1:8000"
    }
}

const prod = {
    Api : {
        API_URL : "http://127.0.0.1:1000"
    }
}


export const config = process.env.NODE_ENV === 'development' ? dev : prod;