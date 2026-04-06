export const renderStudents = (arr) => {
    const students = arr.map(el => {
        return `<tr>
                    <th>${el.id}</th>
                    <th>${el.name}</th>
                    <th>${el.age}</th>
                    <th>${el.course}</th>
                    <th>${el.skills}</th>
                    <th>${el.email}</th>
                    <th>${el.isEnrolled ? 'enrolled' : 'not enrolled'}</th>
                    <th><button class="delete">delete</button><button class="change">change</button></th>
                </tr>`
    }).join('')
    return students
}