1. Tuliskan penjelasan singkat mengenai perbedaan antara JSX dan HTML.
=> html: bener-bener murni code(markup) untuk web
  
    (<h1>hallo</h1>
    <p class="text">nama saya ayash</p>
    <button onclick="alert">press</button>)


   jsx : sintaks yang mirip html tapi jalannya di java script 

        <>
        <div>
            <h1>hallo</h1>
            <p>nama saya ayash</p>
            <button onClick={ () => alert}>press</button>
        </div>
        <div>
            <h1>holla</h1>
            <p>hello</p>
        </div>
        </>
  

2. Menjelaskan Konsep Virtual DOM
    Buatlah ringkasan singkat tentang apa itu Virtual DOM dan bagaimana cara kerjanya di React.
=> virtual DOM itu merupakan salinan dari DOM yang asli di memori
   cara kerjanya ->render->diffing->commit
   tujuannya agar update ui lebih cepat

3, Menjelaskan Perbedaan SPA vs MPA

Tuliskan penjelasan mengenai perbedaan antara Single Page Application (SPA) dan Multi Page Application (MPA).
Berikan minimal 2 kelebihan dan 2 kekurangan dari masing-masing arsitektur.
=> SPA itu merupakan single page application yang dimana  aplikasi web hanya menggunakan satu halaman HTML utama
   MPA berbeda nya hanya di multi, yang berarti aplikasi web yang menggunakan banyak halaman HTMl terpisah

   kekurangan dan kelebihan dari masing masing adalah
   => kekurangan
      SPA - memuat file nya lebih lama di awal
          - konten yang dinamis kadang sulit di index mesin pencari.
   => kelebihan
      SPA - tidak ada reload saat halaman penuh 
          - hanya bagian UI yang berubah saat telah fi update

   => kekurangan
      MPA - penggunaan yang kurang mulus, setiap di klik pasti reload halaman 
          - beban server pasti lebih tinggi 
   => kelebihan
      MPA - di setiap halamannya punya URl nya sendiri jadi lebih baik lah 
          - hanya data untuk halaman itu yang diambil.
