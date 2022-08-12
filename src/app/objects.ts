export interface dataRooms{
    id: number,
    title: string,
    txt: string,
    tower: string,
    info1: string,
    info2: string,
    info3: string,
    images: Array<string>,
    Left_Or_Right: string
}

export interface login{
    email: string,
    password: string
}

export interface register{
    firstname: string,
    lastname: string,
    contact_number: string,
    email: string,
    password: string,
    gender: string
}

export interface googleDataUser{
    fullName: string,
    email: string,
    response: string
}
