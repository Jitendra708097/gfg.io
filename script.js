const user_name0 = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click',(event)=>{
  event.preventDefault();
  const user_name = user_name0.value;

  const detail = fetch(`https://geeks-for-geeks-api.vercel.app/${user_name}`);
  // console.log(detail);
  detail.then((data)=>{
        const body = data.json();
        body.then((response)=>{
          // console.log(response);

          const profile = document.getElementById('profile-info');
          profile.innerHTML = response.info.userName;
          // console.log(response.info.userName);
        })
  })
  .catch((error)=>{
      // console.log('Error',error)
      const profile = document.getElementById('profile-info');
      profile.innerHTML = error;
  });
})


