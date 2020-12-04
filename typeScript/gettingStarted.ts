var userName: string;
userName = "10";

function addValues<T>(a: T, b: T): T {
  return a;
}

var userNameData: number;
userNameData = addValues(1, 4);

addValues("Hello", " World")
addValues(false, true);