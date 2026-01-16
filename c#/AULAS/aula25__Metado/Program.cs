using System;
namespace aula25__Metados{
    class Code{
        static void Main(){
            //metado normal
            static void dobrar0(int valor){
                valor*=2;
            }
            //metado com referencia
            static void dobrar1(ref int valor){
                valor*=2;
            }

            //chamando metado normal
            int num0 = 2;
            dobrar0(num0);

            //chamando metado com ref
            int num1 = 2;
            dobrar1(ref num1);

            //resiltado 

            Console.WriteLine($"metado noram ={num0}\n\nmetado com ref ={num1}");
        
        //metados com ref usam o mesmo local na memoria 

        }
    }
}