import { Component, OnInit } from '@angular/core';
import { empty } from '../../../node_modules/rxjs';
import { parse } from 'url';
import { totalmem } from 'os';
import { print } from 'util';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
/*  sum = 0;
  numbers = [10];
  i = 0; 
  control = 0;
 getValue(value){
   if(this.i==0){
    this.sum = 0;
   }
    
    this.numbers[this.i] = value;
    this.i++;
  }

   total(){
    for(let r = 0; r<this.numbers.length;r++){
    this.sum += this.numbers[r]
    }
    if(this.sum!=0){
      for(let r = 0; r<this.numbers.length;r++){
        this.numbers[r] = 0;
        this.i=0;
         }
     }
  }

  substract(){
    for(let r = 0; r<this.numbers.length;r++){
      if(r==0){
        this.sum+=this.numbers[0];
        
      } 
      if(r>0){
        this.sum -= this.numbers[r]
      }
      }
      if(this.sum!=0){
        for(let r = 0; r<this.numbers.length;r++){
          this.numbers[r] = 0;
          this.i=0;
           }
       }
        
  }

   multiple(){
    for(let r = 0; r<this.numbers.length;r++){
      if(r==0){
        this.sum=1;
      }
      this.sum *= this.numbers[r]
      this.control = this.sum;
      }
      if(this.control!=0){
        for(let r = 0; r<this.numbers.length;r++){
          this.numbers[r] = 0;
          this.i=0;
           }
       }
     }
   division(){
   for(let r = 0; r<this.numbers.length;r++){
    if(r==0){
      this.sum=1;
    }
     this.sum /= this.numbers[r]
     this.control = this.sum;
     }
     if(this.control!=0){
      for(let r = 0; r<this.numbers.length;r++){
        this.numbers[r] = 0;
        this.i=0;
         }
     }
     
      }
   */

   x = '';
   sum = null;
   totalCo = null;
   operator =null;
   pasts = [];
   i = 0;
   contr = null;
   y = '';
   z = '';
   j = '';
   k = 'Press M to See Past Operations.'




   getValue(a: string){
     this.x += a;
     if(this.sum  != null){
      this.sum = null;
     }  
     if(this.contr != null){
       this.contr = null;
     }
 
   }

   delete(){
      let b = '';
      b = this.x.slice(0,-1);
      this.x = b;
   }

   add(){
   
    if(this.totalCo != null){
      if(this.operator == '+'){
        this.totalCo += parseFloat(this.x);
        this.j += this.x +' '+ this.operator;
        this.y += this.x +' '+ this.operator;        
        this.x = '';
        this.contr = this.totalCo;
        
      }else if(this.operator == '-'){
        this.totalCo -= parseFloat(this.x); 
        this.y += this.x + ' + ';
        this.j += this.x + ' + ';;
        this.x = '';
        this.contr = this.totalCo;
      }else if(this.operator == '*'){
       this.totalCo *= parseFloat(this.x); 
       this.y += this.x + ' + '; 
       this.j += this.x +' '+ ' + ';;
       this.x = '';
       this.contr = this.totalCo;
      }else if(this.operator == '/'){
        this.totalCo /= parseFloat(this.x);
        this.y += this.x + ' + ';
        this.j += this.x +' '+ ' + ';;
        this.x = '';
        this.contr = this.totalCo;
      }if(this.operator == null){
        this.totalCo = this.totalCo;
        this.y += ' + '; 
        this.j += this.x +' + ';
        this.contr = this.totalCo;
      }
      
      
    }else{
      this.totalCo = parseFloat(this.x);
      this.y += this.x + ' + ';
      this.j += this.x +' + ';
      this.x = '';

    }
     this.operator = '+';
    }
   substract(){
    if(this.totalCo != null){
      if(this.operator == '+'){
        this.totalCo += parseFloat(this.x);
        this.y += this.x + ' - ';
        this.j += this.x + ' - ' ;
        this.x = '';
        this.contr = this.totalCo;
        
      }else if(this.operator == '-'){
        this.totalCo -= parseFloat(this.x); 
        this.y += this.x + ' - ';
        this.j += this.x +' - ';
        this.x = '';
        this.contr = this.totalCo;
      }else if(this.operator == '*'){
       this.totalCo *= parseFloat(this.x); 
       this.j += this.x +' - ';
       this.y += this.x + ' - ';
       this.x = '';
       this.contr = this.totalCo;
      }else if(this.operator == '/'){
        this.totalCo /= parseFloat(this.x);
        this.j += this.x +' '+ this.operator + ' ';
        this.y += this.x + ' - ';
        this.x = '';
        this.contr = this.totalCo;
      }
      if(this.operator == null){
        this.totalCo = this.totalCo;
        this.j += ' - ';
        this.y += ' - '; 
        this.contr = this.totalCo;
      }
     
    
     
      
    }else{
      this.totalCo = parseFloat(this.x);
      this.y += this.x + ' - ';
      this.j += this.x + ' - ';
      this.x = '';
    }
    
    this.operator = '-';
   }
   multiple(){
   
     if(this.totalCo != null){
      if(this.operator == '+'){
        this.totalCo += parseFloat(this.x);
        this.y += this.x + ' x ';
        this.j += this.x + ' x ';
        this.x = '';
        this.contr = this.totalCo;
        
      }else if(this.operator == '*'){
       this.totalCo *= parseFloat(this.x); 
       this.y += this.x + ' x ';
       this.j += this.x + ' x ';
       this.x = '';
       this.contr = this.totalCo;
      }else if(this.operator == '-'){
        this.totalCo -= parseFloat(this.x);
        this.y += this.x + ' x '; 
        this.j += this.x + ' x ';
        this.x = '';
        this.contr = this.totalCo;
       }else if(this.operator == '/'){
        this.totalCo /= parseFloat(this.x);
        this.y += this.x + ' x ';
        this.j += this.x + ' x ';
        this.x = '';
        this.contr = this.totalCo;
      }else if(this.operator == null){
        this.totalCo = this.totalCo;
        this.j += ' x ';
        this.y += ' x '; 
        this.contr = this.totalCo;
      }
      
     
      
    }else{
      this.totalCo = parseFloat(this.x);
      this.y += this.x + ' x ';
      this.j += this.x + ' x ';
      this.x = '';
    }
    this.operator = '*';
     
   }
   division(){
      if(this.totalCo != null){
        if(this.operator == '+'){
          this.totalCo += parseFloat(this.x);
          this.y += this.x + ' / ';
          this.j += this.x + ' / ';
          this.x = '';
          this.contr = this.totalCo;
          
        }else if(this.operator == '*'){
         this.totalCo *= parseFloat(this.x); 
         this.y += this.x + ' / ';
         this.j += this.x + ' / ';
         this.x = '';
         this.contr = this.totalCo;
        }else if(this.operator == '/'){
          this.totalCo /= parseFloat(this.x);
          this.y += this.x + ' / ';
          this.j += this.x + ' / ';
          this.x = '';
          this.contr = this.totalCo;
        }else if(this.operator == '-'){
          this.totalCo -= parseFloat(this.x); 
          this.y += this.x + ' / ';
          this.j += this.x + ' / ';
          this.x = '';
          this.contr = this.totalCo;
        }
        else if(this.operator == null){
          this.totalCo = this.totalCo;
          this.y += ' / '; 
          this.j += ' / ';
          this.contr = this.totalCo;
        }  
       
    
    }else{
      this.totalCo = parseFloat(this.x);
      this.y += this.x + ' / ';
      this.j += this.x + ' / ';
      this.x = '';
    }
    this.operator = '/';
     
   }
   

   total(){
      
       if(this.operator=='+'){
        this.totalCo += parseFloat(this.x);
        this.y += this.x;        
        this.sum=this.totalCo;
        this.j += this.x + ' = ' + this.sum+ '\n' +' ' ;
        this.totalCo= null;
        this.x='';
        this.operator = null;
        

       }
       if(this.operator=='-'){
        this.totalCo -= parseFloat(this.x);
        this.y += this.x;
        this.sum=this.totalCo;
        this.j += this.x + ' = ' + this.sum+ '\n'+' ' ;        
        this.totalCo=null;
        this.x='';
        this.operator = null;

      }
      if(this.operator=='*'){
        this.totalCo *= parseFloat(this.x);
        this.y += this.x;
        this.sum=this.totalCo;
        this.j += this.x + ' = ' + this.sum+ '\n'+' ' ; 
        this.x='';
        this.operator = null;         
        this.totalCo= null;
        this.x='';
        this.operator = null;

      }
      if(this.operator=='/'){
        this.totalCo /= parseFloat(this.x);
        this.y += this.x;
        this.sum=this.totalCo
        this.j += this.x + ' = ' + this.sum+ '\n'+' ' ; 
        this.pasts[this.i] = this.totalCo;
        this.i++;;       
        this.x='';
        this.totalCo = null;
        this.operator = null;

      }
      this.y = '';
  }

  clear(){
    this.x = '';
    this.totalCo = null;
    if(this.sum != null){
      this.sum = null;
    }
    this.z = '';
  }

  clearAll(){
   this.x = '';
   this.sum = null;
   this.totalCo = null ;
   this.operator = null;
   this.contr = null;
   this.y = '';
   this.i = 0;
   this.z = '';
  
  }

  

  

  square(){
    if(this.totalCo != null){
      this.y += 'sqr(' + this.totalCo + ')' + ' ';
      this.j += 'sqr(' + this.totalCo + ')' + ' ';
      this.totalCo = Math.pow(this.totalCo,2);      
      this.x='';
      this.contr = this.totalCo;
    }else{
      this.totalCo = parseFloat(this.x);
      this.totalCo *= this.totalCo;
      this.contr = this.totalCo;
      this.y += 'sqr(' + this.x + ')' + ' ';
      this.j += 'sqr(' + this.x + ')' + ' ';
      this.x = '';
    }
     
   }
   root(){
    if(this.totalCo != null){
      this.y += '√' + this.totalCo; 
      this.j += '√' + this.totalCo; 
      this.totalCo = Math.sqrt(this.totalCo);      
      this.x='';
      this.contr = this.totalCo;
      
    }else{
      this.totalCo = parseFloat(this.x);
      this.y += '√' + this.totalCo;
      this.j += '√' + this.totalCo;
      this.totalCo = Math.sqrt(this.totalCo)      
      this.x = '';
      this.contr = this.totalCo;
    }

    
     
   }
   makeDivided(){
    if(this.totalCo != null){
      this.y += '1/'+ this.totalCo + ' ';
      this.j += '1/'+ this.totalCo + ' ';
      this.totalCo = 1/this.totalCo;
      this.x='';
      this.contr = this.totalCo;
      
    }else{
      this.totalCo = parseFloat(this.x);
      this.y += '1/'+ this.x+' ';
      this.j += '1/'+ this.x + ' ';
      this.totalCo = 1/this.totalCo;
      this.contr = this.totalCo;
      this.x = '';
    }
    
  }
  addKama(){
    this.x += '.';
  }
  changeMark(){
    
    if(this.totalCo != null){
      if(this.totalCo < 0){
       this.totalCo = Math.abs(this.totalCo);
       this.contr = this.totalCo;
       
      }
       else if(this.totalCo>0){
          this.totalCo *= -1;
          this.contr = this.totalCo;
          this.x='';
          
        }
      
    } else if(this.totalCo == null){
      this.totalCo = parseFloat(this.x);
      if(this.totalCo < 0){
        this.x = '';
        
      }
        if(this.totalCo>0){
          this.totalCo *= -1;
          this.contr = this.totalCo;
          
          this.x='';
    }
      
     
  }
  
    
   
  
  }

  getPast(){
    this.k = '';
    this.z += this.j ; 
   
    this.j  = '';
  }
  



  constructor() { }


  ngOnInit() {
  }

}
