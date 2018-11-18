/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package project2;

import java.util.Scanner;

/**
 *
 * @author btek
 */
public class GenericLinkedQueue<T> {

    private int size; // size of the stack 
    private Node<T> first;
    private Node<T> last;

    private static class Node<T> {

        private T item;
        private Node<T> next;

        public Node(T item) {
            this.item = item;
        }

        public T getItem() {
            return item;
        }

    }

    public GenericLinkedQueue() {
        first = null;
        last = null;
        size = 0;
    }
    

    public boolean isEmpty() {
        return first == null;
    }

    public int size() {
        return size;
    }

    public void enqueue(T entry) {
        Node<T> newNode = new Node(entry);
        if (first == null) {
            first = newNode;
            last = newNode;
        } else {
            last.next = newNode;
            last = newNode;
        }
        size++;
    }

    public T dequeue() {
        if (isEmpty()) {
            throw new java.util.NoSuchElementException("Stack underflow");
        }
        Node<T> tmp = first;
        first = first.next;
        tmp.next = null;
        size--;
        return tmp.item;                // return the saved item
    }

    /**
     * @param args the command line arguments
     */
    public void candyCrush(){
        int defaultStackSize = 5;
        int point = 0;
        Scanner input = new Scanner(System.in);
        System.out.println("How much turn you want to play? (40 or more)");
        int k = input.nextInt();
        while(k<40){
            System.out.println("You decided lesser than 40. Please choose 40 or more turn.");
            k = input.nextInt();
        }
        GenericLinkedQueue<Candy> que = new GenericLinkedQueue<Candy>();
        GenericStack<Candy> stack1 = new GenericStack<>(defaultStackSize);
       GenericStack<Candy> stack2 = new GenericStack<>(defaultStackSize);
       GenericStack<Candy> stack3 = new GenericStack<>(defaultStackSize); 
        for (int i = 0; i < k; i++) {
            int a = (int)(Math.random() * 3) ;
            int b = (int)(Math.random() * 3) ;
            String color = "";
            String shape = "";
            if(a==0){
                color = "red";
                
            }
             if(a==1){
                color = "blue";
               
            }
              if(a==2){
                  color = "green";                 
               
            }
              if(b==0){
                 
                  shape = "Heart";
              }
              if(b==1){
                  
                  shape = "Spade";
              }
              if(b==2){
                  
                  shape = "Diamond";
              }
            Candy tmp = new Candy(color, shape);
            que.enqueue(tmp);
        }
              GenericLinkedQueue<Candy> que2 = que;
              Candy [] current5 = new Candy[que2.size];
               for(int x = 0; x<5;x++){
                   current5[x] = que2.dequeue();
                   
           }
               
               System.out.println("");
       int current = 5;
       for(int r = 0 ; r <k;r++){
          
           System.out.println("Remaining Turns: "+k);

           for (int i = 0; i < 2; i++) {
               
          if(!stack1.isFull()){
               stack1.push(que.dequeue());
               
          }else if(!stack2.isFull()){
              stack2.push(que.dequeue());
          }
          
          else if(stack1.isFull() && stack2.isFull()){
              stack3.push(que.dequeue());
          }
          else if(stack1.isFull() && stack2.isFull()&& stack3.isFull()){
              System.out.println("Game Over");
              k = 40;
              r = 40;
          }
                  
                 Node t = que.first;
           for(int b = 0 ; b<5;b++){
             if(t.next != null){
                 Candy cand = (Candy) t.item;
                System.out.print(cand);
               t = t.next;  
             }
              
           }
             
           
          
               System.out.println("");
             System.out.println("Stacks: ");
              System.out.println("Stack 1: "+stack1);
               System.out.println("");
               System.out.println("Stack 2: "+stack2);
               System.out.println("");
                 System.out.println("Stack 3: "+stack3);
                 System.out.println("");
                 System.out.println("You have 5 turn to play ");
               System.out.println("1.You can move candy bar's first candy to another candy bar. Command pp+Number of Candy Bar that candy will pop.+Number Of Candy Bar that candy will pushed.");
                  System.out.println("2.You can crash the candys with command cr and number of candy bar.");
                  System.out.println("3.You can skip turn and another push from candy que from first candy bar.");
                System.out.println("Please write what you want to do?");
           String choose = input.next();
       
               
           
           char a = '0';
           char b = '0';
           if(choose.charAt(0) != 'c'){
                 a = choose.charAt(2);
                 b = choose.charAt(3);
           
         Candy nd1 = new Candy();
          
           System.out.printf("pop from "+a+" and push to "+b);
           
           if(a == b){
               System.out.println("You can not add candy to same candy bar.");
               System.out.println("Please Choose again");
               choose = input.next();
           }
           if(a == '1' && !stack1.isEmpty()){
                
                    nd1 = stack1.pop();
                
              
           }
           if(a == '2' && !stack2.isEmpty()){
                
                    nd1 = stack2.pop(); 
                
                 
           }
           if(a == '3' && !stack3.isEmpty()){
                
                
                 nd1 = stack3.pop();   
                
              
           }
            if(b == '1'){
               stack1.push(nd1);
           }
            if(b == '2'){
              stack2.push(nd1);
           }
            if(b == '3'){
              stack3.push(nd1);
           }
           }
           if(choose.equals("cr1")){
                if(stack1.isEmpty()){
                     System.out.println("Candy Bar is null.");
                 } 
                   if(stack1.howManyMembersLeft() == 1 && r > 2){
                       System.out.println("Poping Candy");
                       System.out.println("+1 Point");
                    stack1.pop();
                    point++;
               }if(stack1.howManyMembersLeft() >1 ){
                   System.out.println("Poping Candies");
                    int cal = 1;
                      while(cal > 0 || !isEmpty()){
                   Candy cd = stack1.pop();
                  Candy cd2 = stack1.pop();
                 if(cd.color == cd2.color|| cd.shape == cd2.shape){
                   if(cd.color == cd2.color && cd.shape == cd2.shape){
                       System.out.println(cd2+" "+cd);
                       System.out.println("+2 Point");
                       point += 2;
                   }
                   else{
                       System.out.println("+1 Point");
                       point ++;
                   }
                }      else{
                   stack1.push(cd2);
                   cal = 0;
               } 
                }
                            
               }
              
           }
              if("cr2".equals(choose)){
                   if(stack2.isEmpty()){
                     System.out.println("Candy Bar is null.");
                 }
                if(stack2.howManyMembersLeft() == 1 && r > 2){
                    System.out.println("Poping Candy");
                    stack2.pop();
                    System.out.println("+1 Point");
                    point++;
                }if(stack2.howManyMembersLeft() >1 ){
                    System.out.println("Poping Candies");
                    int cal = 1;
                      while(cal > 0){
                   Candy cd = stack2.pop();
                  Candy cd2 = stack2.pop();
               if(cd.color == cd2.color|| cd.shape == cd2.shape){
                   if(cd.color == cd2.color && cd.shape == cd2.shape){
                       System.out.println("+2 Point");
                       point += 2;
                   }else{
                       System.out.println("+1 Point");
                       point ++;
                   }
               }else{
                   stack2.push(cd2);
                   cal = 0;
               } 
                }
                            
               }
              
           }
                 if(choose.equals("cr3")){
               if(stack3.isEmpty()){
                     System.out.println("Candy Bar is null.");
                 }
                if(stack3.howManyMembersLeft() == 1 && r > 2){
                    System.out.println("Poping Candy");
                    System.out.println(stack3.pop());
                    System.out.println("+1 Point");
                    point++;
                }
                
                if(stack3.howManyMembersLeft() >1  ){
                    System.out.println("Poping Candies");
                    int cal = 1;
                      while(cal > 0){
                   Candy cd = stack3.pop();
                  Candy cd2 = stack3.pop();
             if(cd.color == cd2.color|| cd.shape == cd2.shape){
                   if(cd.color == cd2.color && cd.shape == cd2.shape){
                       System.out.println("+2 Point");
                       point += 2;
                   }else{
                       System.out.println("+1 Point");
                       point ++;
                   }
               }
              else{
                   stack3.push(cd2);
                   cal = 0;
               } 
                }
                            
               }
                
           }
                 if(choose.equals("skip")){
                     System.out.println("Skipped");
                 }
           
              current++;
              if(i == 1){
                  int pointloss =  stack1.howManyMembersLeft();
                  pointloss += stack2.howManyMembersLeft();
                  pointloss += stack3.howManyMembersLeft();
                  point -= pointloss;        
              }
              System.out.println("Your Current Point: "+point);
           }
            
        
           
    }
       
    }
    public static void main(String[] args) {
        GenericLinkedQueue q1 = new GenericLinkedQueue();
        q1.candyCrush();
    }
    
}

      
