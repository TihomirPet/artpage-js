const supabaseUrl = 'https://slifvztzaykrfupvihlz.supabase.co';
const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsaWZ2enR6YXlrcmZ1cHZpaGx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYwMDg3MDAsImV4cCI6MTk4MTU4NDcwMH0.-1uyAGpWlZu6ki7UkAjvWRKrGcBMRTxjIz9VwvtS-Ms';
var supabase = supabase.createClient(supabaseUrl, supabaseKey);
console.log(supabase);


 async function detailGallery() {
   let { data: gallery, error } = await supabase.from('gallery').select('*');

   if (error) {
     throw new Error(error);
   }

   let contentD = `  


  ${gallery.map(
    (element) =>
      `


    <form method="get" action="/pages/detail.html" class="border">

    <div class=" test" id="">
     <button  type="submit">
      <h2  type="text" name="title-detail"   value="${element.title}"/>${element.title}</h2>
    
     <img  src="/public/images/${element.image}" height="200" />
     <input class=" test" type="text" name="id"  value="${element.id}"/>
     </button>


     </div>
    

   </form>
    


     `
  )}
  

  
  `;

   let p = document.getElementById('gallery');
   p.insertAdjacentHTML('beforeend', contentD);
 }



window.addEventListener('load', () => {
  let params = new URL(document.location).searchParams;

  const idDetail = params.get('id');
  //  const title = params.get('title-detail');

  document.getElementById('result').innerHTML = idDetail;
  //  document.getElementById('result-title').innerHTML = title;

  //  let output = window.location.search;
  //  alert(output);
});


detailGallery();