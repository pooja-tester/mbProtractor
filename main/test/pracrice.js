describe('Describe', () => {
	beforeEach(()=> { //beforeEach function
		Console.log('Before Each Called');
	});
	it('Sample 1', () => {
		Console.log('First it block');
	});
	it('Sample 2', () => {
		Console.log('Second It block');
	});
	afterEach( () =>{ //afterEach function
		Console.log('After Each Called');
	});
})