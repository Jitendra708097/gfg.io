const detail = fetch(" https://geeks-for-geeks-api.vercel.app/jitendrasha6vrm");
// console.log(detail);
detail.then((data)=>{
      const body = data.json();
      body.then((response)=>{
        console.log(response);
      })
})
.catch((error)=>{
    console.log(error)
});