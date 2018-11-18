/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package project2;



/**
 *
 * @author Kinect
 */
public class GenericStack<Item> {

    private Item[] a;    // holds the items
    private int top;
    private int printnum = 0;// number of items in stack

    // create an empty stack with given capacity
    public GenericStack(int capacity) {
        a = (Item[]) new Object[capacity];   // no generic array creation
    }

    public boolean isEmpty() {
        return top == 0;
    }
    
    public boolean isFull(){
        if(top == a.length){
            return true;
        }
            return false;
    }

    public void push(Item item) {
        a[top++] = item;
    }

    public Item pop() {
        printnum++;
        return a[--top];
        
    }

    public static void main(String[] args) {
        // TODO code application logic here,
        GenericStack<Integer> gstack = new GenericStack<>(2);
        gstack.push(1);
        gstack.push(2);
        System.out.println(gstack.isFull());
        

    }
    
    @Override
    public String toString(){
        String s = "";
        for(int i = printnum;i<top;i++){
            s += a[i];
        }
        return s;
    }
    
    public int howManyMembersLeft(){
        int b = 0;
        for(int i = 0; i<top;i++){
            if(a[i] != null){
                b++;
            }
        }
        return b;
    }
}

class Student {

    private int no;
    private String name;

    Student(String name, int no) {
        this.no = no;
        this.name = name;
    }

    @Override
    public String toString() {
        return "Student: " + name + " No:" + no;
    }
}
