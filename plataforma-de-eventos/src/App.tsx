import { gql, useQuery} from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"

// gql do apollo permite escrever queries e mutations usando a sintaxe Highlighter

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id 
      title 
      teacher {
        name
      }
    }
  }
`
type Lessons = {
  id: string;
  title: string;
}

export function App() {
  const {data} = useQuery<{lessons: Lessons[]}>(GET_LESSONS_QUERY)

  console.log(data)
  return (
    <>
      <ul>
        {
          data?.lessons.map(
            lesson => {
             return <li>
              {lesson.title}
             </li> 
            }
          )
        }
      </ul>
    </>
  )
}


