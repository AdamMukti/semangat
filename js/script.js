let nama, val;
const url_string = document.URL;
const url = new URL(url_string);
let doi;

if (url.searchParams.get('in') != null) {
  doi = url.searchParams.get('in');
} else {
  doi = "Irna";
}

let footer = document.getElementById("credit");
footer.innerHTML = doi;
footer.href = "https://www.instagram.com/adamukti/";

function time() {
  var d = new Date();
  var n = d.getHours();
  console.log(n);
  if (n >= 5 && n <= 10) {
    return "Pagi"
  } else if (n >= 10 && n <= 15) {
    return "Siang"
  } else if (n >= 15 && n <= 18) {
    return "Sore"
  } else if (n >= 18 && n <= 24) {
    return "Malam"
  }
}

function makan() {
  switch (time()) {
    case "Pagi":
      return "sarapan"
      break;
    case "Siang":
      return "makan siang"
      break;
    case "Malam":
      return "makan malam"
      break;
      case "Sore":
      return "makan"
      break;
    default:
      break;
  }
}

function selesai() {
  const teks = document.getElementById('teks');
  const btn = document.querySelector('.tombol');
  teks.innerHTML = `Semangat ${doi} <i
  class="fas fa-heart text-danger animate__animated animate__heartBeat animate__repeat-3"></i>`;
  btn.classList.add('d-none');
  teks.classList.remove('d-none');  
}


document.querySelector(".tombol").addEventListener('click', function () {
  Swal.fire({
    title: 'Hai mamass, imasekk imoll!',
    html: `Selamat ${time()}, Kamu udah ${makan()}?`,
    timer: 2500,
    timerProgressBar: true,
    showConfirmButton: false,
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      Swal.fire('Kalau belum jangan lupa makan yaa').then((result) => {
        Swal.fire({
          title: ' ',
          html: `tebak, hari ini harinya siapa?`,
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire({
              title: ' ',
              html: `iyaa, manusia baik nan manis ini ulang tahun nihh ^^`,
              timer: 2000,
              timerProgressBar: true,
              showConfirmButton: false,
            }).then((result) => {
              if (result.dismiss === Swal.DismissReason.timer) {
                Swal.fire('selamat ulang tahun cantik! barakallah umur barunyaa <3').then((result) => {
                  Swal.fire(
                    'jangan keseringan begadang, ok! jangan telat makan!! jangan ngilang mulu! hehe',
                    '',
                    'error'
                  ).then((result) => {
                    Swal.fire(
                      'panjang umur perjuangan, terimakasih sudah bertahan hingga hari ini dan seterusnya <3',
                      '',
                      'error'
                    ).then((result) => {
                      Swal.fire('semangat kuliahnyaa! abs gambus selalu siap sedia menjadi support system kamuu^^').then((result) => {
                        Swal.fire({
                          title: 'oh iya aku mau nanya',
                          text: 'ada sesuatu yang lagi kamu pingin ga?',
                          showDenyButton: true,
                          confirmButtonText: `adaaa nih`,
                          denyButtonText: `ga ada ko`,
                        }).then((result) => {
                          /* Read more about isConfirmed, isDenied below */
                          if (result.isConfirmed) {
                            Swal.fire({
                              title: 'mau apa? tulis ajaa, ntar dikabuli kalo gak ngawur, hehe :D',
                              input: 'text',
                              inputPlaceholder: 'ex: Seblacc, boba, or iqbal sama kai(canda, eh)',
                              showCancelButton: false,
                              inputValidator: (value) => {
                                if (!value) {
                                  return 'isi dulu dong mass'
                                }
                              }
                            }).then((result) => {
                              Swal.fire('ogheii', 'ntarr kami kabulin kemauan kamu yaa', 'success').then((result) => {
                                Swal.fire("see ya in palembang! segenap anggota abs gambus rindu nich, gurau kost jugaa ^^").then((result) => {
                                  selesai()
                                });
                              })
                            })
                          } else if (result.isDenied) {
                            Swal.fire('oh okedeh kalo ga ada:()).then((result) => {
                              Swal.fire("see ya in palembang! segenap anggota abs gambus rindu nich, gurau kost jugaa ^^").then((result) => {
                                selesai()
                              });
                            })
                          }
                        })
                      })
                    })
                  })
                })
              }
            })
          }
        })
      })
    }
  })
});
