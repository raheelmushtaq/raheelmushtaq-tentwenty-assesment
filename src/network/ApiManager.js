import { API_URLS, REQUEST_TYPE } from "../utils/constants"

//access token: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTU5ZDc1ZmM0ZjY4ZTljNGU4NTU0NzRjOTNiNDU3OSIsIm5iZiI6MTcyNDM1NDQzMy40MTc1MjgsInN1YiI6IjYzY2E3MTllMDA2YjAxMDA4NGYwMzdiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VCrxeHvrJUGs2GkDKW6vRpUld6J_nCfI3sQ5rRisa5M


export const ApiManager = async (
    endPoint = "",
    methodType = REQUEST_TYPE.GET,
    params = {}) => {


    const generateQueryParams = (params = {}) => {
        const queryParams = new URLSearchParams();
        queryParams.append("api_key", "ee59d75fc4f68e9c4e855474c93b4579")
        for (const [key, value] of Object.entries(params)) {
            if (Array.isArray(value)) {
                value.forEach(val => queryParams.append([key], val));
            } else {
                queryParams.append([key], value);
            }
        }
        return "?"+queryParams.toString();
    };

    const returnResponse = (error, message, data) => {
        return {
            error, message, data
        }
    }
    var serverUrl = API_URLS.baseUrl + endPoint
    var response = methodType === REQUEST_TYPE.POST ?
        await fetch(serverUrl + generateQueryParams({}), {
            method: "POST",
            body: params,
        }) : await fetch(serverUrl + generateQueryParams(params), {
            method: "GET",
        })


    try {
        const json = await response.json();
        console.log({ json })
        const responseOk = await response.ok;
        const responseStatus = await response.status;
        if (responseStatus !== 200 && responseStatus !== 201) {
            return returnResponse(true, json?.message || "Server Failure", null);
        }
        return returnResponse(false, "", json);
    } catch (error) {
        return returnResponse(true, (await response.text()).toString(), null);
    }
}