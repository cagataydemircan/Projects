/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package project2;

/**
 *
 * @author Cagatay
 */

public class Candy {
   protected String color;
   protected String shape;

    public Candy(String color, String shape) {
        this.color = color;
        this.shape = shape;
    }

    public Candy() {
    }

  
    
    @Override
    public String toString() {
        if(color.equals("red")){
          return  ConsoleColors.RED +shape+" "+ConsoleColors.RESET+" ";
        }
        if(color.equals("blue")){
          return  ConsoleColors.BLUE +shape+" "+ConsoleColors.RESET+" ";
        }
        if(color.equals("green")){
          return  ConsoleColors.GREEN+ shape+" "+ConsoleColors.RESET+" ";
        }
    
        return "";
    }
}
