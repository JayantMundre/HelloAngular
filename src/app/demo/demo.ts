class MyClass{
    id:number;
    fname:string;
    lname:string;

constructor(id:number,f:string,l:string){
    this.id=id;
    this.fname=f;
    this.lname=l;
}

    display(){
        console.log(`
        ID :: ${this.id}
        FNAME ::${this.fname}
        LNAME :: ${this.lname}
        `)
    }
}
let obj=new MyClass(10,'Jayant','Mundre');
obj.display();