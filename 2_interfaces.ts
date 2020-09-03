interface Rect {
    readonly id: string,
    color?: string,
    size: {
        width: number,
        height: number,
    }
}

const someRect: Rect = {
    id: '123',
    size: {
        width: 20,
        height: 25
    },
    color: '#fff'
};

const anotherRect: Rect = {
    id: '4',
    size: {
        width: 20,
        height: 25
    },
};

anotherRect.color = '#000';

const rect3 = {} as Rect;
const rect4 = <Rect>{};

//============

interface IClock {
    time: Date,
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()
    setTime(date: Date): void {
        this.time = date
    }
}

interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
};
