interface ICalorie {
    food?: string;
    quantity?: number;
    servingSize?: number;
    calories?: number;
    editing?: boolean;
}

export class Calorie {
    public food?: string;
    public quantity?: number;
    public servingSize?: number;
    public calories?: number;
    public editing?: boolean;

    constructor(calorie: ICalorie) {
        calorie.editing = this.setState(calorie);
        Object.assign(this, calorie);
    }

    setState(calorie: ICalorie) {

        if ( calorie == null || Object.keys(calorie).length == 0) {
            return true;

        }



        let editing = false;
        Object.keys(calorie).forEach((key) => {
            if (calorie[key] == null ) {
                editing = true;
             }

        });

        return editing;
    }

}
