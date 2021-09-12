import '../styles/style.scss';
import { ABC } from './text';
const  fn = () =>{
    console.log('i am fn')
}
fn()
console.log(ABC);

class X {
    a = 10
    ABC(){
        console.log(a)
    }
}
let a = new X()
a.ABC()