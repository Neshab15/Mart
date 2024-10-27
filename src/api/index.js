const mainAPI = "https://fakestoreapiserver.reactbd.com/tech";

export async function callingAPI() {
    const response = await fetch(mainAPI,{
        method:"GET"
    });
    return await response.json();
}