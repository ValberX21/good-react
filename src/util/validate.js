export function validationUser(name,age){
    
    if(!name.trim()){
        return "You need input a name !"
    }

    if(name.length < 3){
        return "The name need have more than 3 characters !"
    }

    if(age <= 0){
        return "Age must be high than 0"
    }

    return null;
}