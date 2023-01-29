//type data string
let nama: string = "Tony";
let calling: string = `Halo ${nama}`;

// type data number
let num1: number = 10;
let decimal: number = 22.3;
let hexadecimal: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// type data boolean
let isTrue: boolean = true;

//array
let marvelSuperHeroes: string[] = ['iron man', 'spider man', 'Thor'];
let dcSuperHeroes: Array<string> = ['Batman', 'Superman', 'Shazam'];

//unknown
//bisa memasukan apapun di dalamnya
let hari: unknown = 'Senin';
hari = 1;
hari = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu']

//any
//bisa mengakses scr sewenang2 bahkan jika data itu tidak ada
let mobil: any = 'Tesla';
mobil.brand();


//tuple => memungkinkan untuk mengekspresikan tipe data pada array dan tidak harus sama
//declare a tuple type
let x: [string, number];
//initialize it
x = ['hello', 10];
//initialize it incorrectly
// x = [10,'hello'];