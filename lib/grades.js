var gradeBook ={
	_grades: [],
	addGrade: function(newGrade){
		this._grades.push(newGrade);
		
	},
	getCountOfGrade: function(){
		return this._grades.length;
	},
	getAverage:function(){
		var totalgrade=0;
		for(var i=0;i<this._grades.length;i+=1)
		{
			totalgrade = totalgrade+this._grades[i];
			
		}
		var avggrade = totalgrade/(this._grades.length);
		return avggrade;
	},
	reset: function(){
		this._grades=[];
		
	},
	getLetterGrade: function(){
		var average = this.getAverage();
		
		if(average>=90)
		{
			return "A";
		}
		
		else if(average>=80)
		{
			return "B";
		}
		
		else if(average>=70)
		{
			return "C";
		}
		
		else if(average>=60)
		{
			return "D";
		}
		return "F";
		
	}
};

exports.book = gradeBook;