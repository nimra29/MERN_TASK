
export default {

    getdata:async()=>{
       const response=await fetch('https://public.connectnow.org.uk/applicant-test/?' + new URLSearchParams({
        id: 109596
        }))
        const data=await response.json()
        return data;
}
}
