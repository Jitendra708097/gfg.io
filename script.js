const user_name0 = document.getElementById('username');
const user_name = user_name0.value;

const button = document.getElementById('button');

button.addEventListener('click',()=>{
  const detail = fetch(`https://geeks-for-geeks-api.vercel.app/${user_name}`);
  // console.log(detail);
  detail.then((data)=>{
        const body = data.json();
        body.then((response)=>{
          // console.log(response);

          const profile = document.getElementById('profile-info');
          profile.innerHTML = response.info.userName;
        })
  })
  .catch((error)=>{
      console.log(error)
  });
})

