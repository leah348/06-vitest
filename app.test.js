import { test, expact, describe } from "vitest";
import { FindMaxValue, factorial, areArraysEqual, toTitileCase } from "./app";

FindMaxValue([3, 7, 2, 8, 5]); //8
FindMaxValue([]); //null
FindMaxValue([-10, -20, -1]); //-1
FindMaxValue("not an array"); //null

factorial(5); //120
factorial(0);
factorial(-3);
factorial("5"); //null

areArraysEqual([1, 2, 3], [1, 2, 3]); //true
areArraysEqual([1, 2, 3], [3, 2, 1]); //false
areArraysEqual([], []); //true
areArraysEqual([1, 2], [1, 2, 3]); //false

toTitileCase("hello world"); //"Hello World"
toTitileCase("JAVASRIPT IS FUN"); //"Javascript Is fun"
