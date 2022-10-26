const supabaseUrl = 'https://slifvztzaykrfupvihlz.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsaWZ2enR6YXlrcmZ1cHZpaGx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYwMDg3MDAsImV4cCI6MTk4MTU4NDcwMH0.-1uyAGpWlZu6ki7UkAjvWRKrGcBMRTxjIz9VwvtS-Ms';
var supabase = supabase.createClient(supabaseUrl, supabaseKey);




let baseUrl = window.location.href; // You can also use document.URL
let koopId = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);
console.log(koopId); //503

async function readGallery() {
  let { data: element, error } = await supabase
    .from('gallery')
    .select('*,images(*)')
    .eq('id', koopId)
    .single();
  if (error) {
    throw new Error(error);
  }

  console.log(element);

  let content = `  


  ${element.images.map(
    (el) =>
      `

     <img  src="/public/images/${el.image}"  class="details-img"/>
 

     `
  )}
  

  
  `;

  let parent = document.getElementById('galleryD');
  parent.insertAdjacentHTML('beforeend', content);
}
 readGallery();