import {Course} from "./Course";
import {CoursesReducer} from "../reducers/CoursesReducer";

export const Courses = () => {
    console.log(CoursesReducer);
    return (
        <div className="App">
            <table>
                <tr>
                    {CoursesReducer.Data.map((item) => (
                        <td>
                            <Course courseName={item.courseName}
                            instituteName={item.instituteName}
                            contact={item.contact}
                            city={item.city} />
                        </td>
                    ))}
                </tr>
            </table>

        </div>
    )
}
