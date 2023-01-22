let productos = [
    {id: '1' , categoria: 'camisetas'   , name: "Camiseta Oficial 2023" , descripcion: "Camiseta Oficial (Local) del Club Nacional de Football de la Tempora 2023"           , price: "3700" , foto: 'https://f.fcdn.app/imgs/846d4e/tienda.nacional.uy/tnacuy/1d8b/webp/catalogo/NULSC861_SV4_1/2000-2000/camiseta-of-2022-l-suarez-copa-nacional-hombre-con-sponsors.jpg'},
    {id: '2' , categoria: 'camisetas'   , name: "Camiseta Golero 2023"  , descripcion: "Camiseta Oficial de Golero (Local) del Club Nacional de Football de la Tempora 2023" , price: "2500" , foto: 'https://f.fcdn.app/imgs/99544e/tienda.nacional.uy/tnacuy/f261/webp/catalogo/NU942867_S16_1/460x460/camiseta-golero-2022-nacional-hombre-skuba-azul-marino-azul-royal.jpg'},
    {id: '3' , categoria: 'accesorios' ,  name: "Pelota"                , descripcion: "Pelota Umbro (football 11) "                                                         , price: "8000" , foto: 'https://f.fcdn.app/imgs/f1bd90/tienda.nacional.uy/tnacuy/4dd2/webp/catalogo/226871U0_KYP_1/2000-2000/pelota-umbro-neo-society-n-4-umbro-kyp.jpg'},
    {id: '4' , categoria: 'accesorios' ,  name: "Gorro"                 , descripcion: "Gorro de abrigo Umbro"                                                               , price: "3500" , foto: 'https://f.fcdn.app/imgs/e07211/tienda.nacional.uy/tnacuy/a806/webp/catalogo/262304U0_Y70_1/2000-2000/gorro-acrilico-beanie-umbro-sin-sponsors.jpg'},
  ]
    
  export const gFetch = ()=> {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos)
      }, 3000)
   })
  }