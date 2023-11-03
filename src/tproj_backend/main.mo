import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Random "mo:base/Random";
import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Int "mo:base/Int";


actor {
  var number:Nat = 1000;
  // public query func greet(name : Text) : async Text {
  //   return "Hello, " # name # "!";
  // };
  public func topup(amount:Nat) {
    number += amount;
    Debug.print(debug_show(number));
  };

  // public  func greet1(numbers: Nat) : async Nat {
  //   number += numbers;
  //   return  na,umber ;
  //}

  public func withdraw(amount:Nat)  {
    number -= amount;
    Debug.print(debug_show(number));
  };

    type Time = Int;
    let time = Time.now();
  public query func check(): async Nat{

    return number;
  };


};
