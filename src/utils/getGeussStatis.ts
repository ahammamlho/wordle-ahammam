const GetGeussStatistic = (attempt: string, world: string) => {
    let geussStatis: { rate: number, color: string } = { rate: 0, color: "bg-red-600" };
    const wordArray = Array.from(world);
    wordArray.forEach((char, index) => {
        if (char === attempt[index]) {
            geussStatis.rate++;
        }
    });
    if (geussStatis.rate == 1) geussStatis.color = 'bg-red-400'
    if (geussStatis.rate == 2) geussStatis.color = 'bg-red-200'
    if (geussStatis.rate == 3) geussStatis.color = 'bg-green-100'
    if (geussStatis.rate == 4) geussStatis.color = 'bg-green-300'
    if (geussStatis.rate == 5) geussStatis.color = 'bg-green-600'
    return geussStatis
};

export default GetGeussStatistic;