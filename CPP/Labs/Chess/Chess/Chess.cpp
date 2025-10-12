// Chess.cpp : Этот файл содержит функцию "main". Здесь начинается и заканчивается выполнение программы.
//

#include <iostream>
#include "Chess.h"
#include <windows.h>
#include <cstdlib>
#include <conio.h>


using namespace std;
const int range = 5;
void PrintChessBoard(int board[range][range]);
void InitChessBoard(int board[range][range], int posRow, int posCol);
void Step(int board[range][range], int posRow, int posCol, int stepNumber);
bool MarkFild(int board[range][range], int newPosRow, int newPosCol, int stepNumber);


int main()
{
    setlocale(LC_ALL, "");
    int chessBoard[range][range];
    int posRow = 3;
    int posCol = 3;
   
    InitChessBoard(chessBoard, posRow, posCol);
    PrintChessBoard(chessBoard);
    Step(chessBoard, posRow, posRow, 1);
    
    
}
//печать доски
void PrintChessBoard(int board[range][range])
{

    cout << std::string(range * 4, '-') << endl;
    for (size_t i = 0; i < range; i++)
    {
        for (size_t j = 0; j < range; j++)
        {
            if (board[i][j] == 0)
            {
                cout << "|   " ;
            }
            else if (board[i][j] < 10)
            {
                cout << "| " << board[i][j] << " " ;
            }
            else
            {
                cout << "| " << board[i][j]  ;
            }
        }
        cout <<"|" << endl;
        cout << std::string(range*4, '-') << endl;
    }
    //Sleep(100);
}
//инициализация доски
void InitChessBoard(int board[range][range], int posRow, int posCol)
{
    for (size_t i = 0; i < range; i++)
    {
        for (size_t j = 0; j < range; j++)
        {
            board[i][j] = 0;
        }       
    }
    board[posRow ][posCol ] = 1;

}
//выполнение хода
void Step(int board[range][range], int posRow,int posCol, int stepNumber)
{   
   
    for (int i = -1; i <=1 ; i+=2)
    {
        for (int j = -2; j <= 2; j+=4)
        {
            if (MarkFild(board, posRow + i, posCol + j, stepNumber+1)) {
                Step(board, posRow + i, posCol + j, stepNumber+1);
                if (stepNumber == range*range)
                    return;
            }
        }
    }
    for (int i = -2; i <= 2; i += 4)
    {
        for (int j = -1; j <= 1; j += 2)
        {
            if (MarkFild(board, posRow + i, posCol + j, stepNumber + 1)) {
                Step(board, posRow + i, posCol + j, stepNumber + 1);
                if (stepNumber == range * range)
                    return;
            }
        }
    }  
    board[posRow][posCol] = 0;
    if (stepNumber == 1) {
        cout << "Путь не найден ...";
        system("pause");
    }
}
//установка марки на поле
bool MarkFild(int board[range][range], int newPosRow, int newPosCol, int stepNumber)
{

    if (newPosRow >= 0 && newPosRow < range && newPosCol >= 0 &&  newPosCol < range && board[newPosRow][newPosCol]==0) 
    {
        board[newPosRow][newPosCol] = stepNumber;    
        system("cls");
        cout << "шаг : " << stepNumber << endl;
        PrintChessBoard(board);
        if (stepNumber == range * range) {
            cout << "Путь найден !!!!" << endl;
            system("pause");
        }
        return true;
    }
    else 
    {
        return false;
    }
}





// Запуск программы: CTRL+F5 или меню "Отладка" > "Запуск без отладки"
// Отладка программы: F5 или меню "Отладка" > "Запустить отладку"

// Советы по началу работы 
//   1. В окне обозревателя решений можно добавлять файлы и управлять ими.
//   2. В окне Team Explorer можно подключиться к системе управления версиями.
//   3. В окне "Выходные данные" можно просматривать выходные данные сборки и другие сообщения.
//   4. В окне "Список ошибок" можно просматривать ошибки.
//   5. Последовательно выберите пункты меню "Проект" > "Добавить новый элемент", чтобы создать файлы кода, или "Проект" > "Добавить существующий элемент", чтобы добавить в проект существующие файлы кода.
//   6. Чтобы снова открыть этот проект позже, выберите пункты меню "Файл" > "Открыть" > "Проект" и выберите SLN-файл.
