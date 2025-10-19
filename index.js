function calculateGrade(a) {
    const update_students = [];
    for (const students of a){
        let sum = 0;

        for (let i = 0; i < students.scores.length; i++) {
            sum += students.scores[i];
            
        }

        const srednee = sum / students.scores.length;
        
        let grade;
        if (srednee >= 90) {
            grade = "A";
        } else if (srednee >= 80) {
            grade = "B";
        } else if (srednee >= 70) {
            grade = "C";
        } else {
            grade = "F";
        }
        
        const studentWithGrade = {
            name: students.name,
            scores: students.scores,
            srednee: srednee,
            grade: grade
        };
        
        update_students.push(studentWithGrade);
    }
    
    return update_students;
}

const students = [
  { name: "Алексей", scores: [85, 92, 78] },
  { name: "Мария", scores: [95, 87, 92] },
  { name: "Елена", scores: [62, 49, 99] },
  { name: "Мария", scores: [55, 70, 81] },
];


function filterProducts(b, c) {
    const result = [];
    
    for (const product of b) {
        let matches = true;
        
        if (c.maxPrice !== undefined) {
            if (product.price > c.maxPrice) {
                matches = false;
            }
        }
        
        if (c.category !== undefined) {
            if (product.category !== c.category) {
                matches = false;
            }
        }
        
        if (matches) {
            result.push(product);
        }
    }
    
    return result;
}
const products = [
    { name: "Ноутбук", price: 50000, category: "электроника" },
    { name: "Стул", price: 5000, category: "мебель" },
    { name: "Картина", price: 20000, category: "искусство" },
    { name: "Кофеварка", price: 15000, category: "электроника" },
    { name: "Статуэтка", price: 8000, category: "исскуство" },
];

const filters = { maxPrice: 10000, category: "исскуство" };

console.log(calculateGrade(students));
console.log(filterProducts(products, filters));