

test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

test('null',()=>{
    const i = null
    expect.assertions(2);
    expect(i).toBeDefined()
    expect(i).toBeNull()
})

const animals = ['cat', 'dog']

test('array', () => {
    expect(animals).toContain('cat')
    expect(animals).toBeInstanceOf(Array)
    // expect(animals).toEqual(['cat', 'dog'])
})

function getData(){
    throw new Error('data not found')
}

test('getdata',()=>{
    expect(()=>getData()).toThrow('data not found');
})
