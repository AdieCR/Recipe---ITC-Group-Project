import React from 'react'
import RecipeCard from "../RecipeCard/RecipeCard";
import { Row, Col } from 'react-bootstrap'

function RecipeList({RecipeList}) {
  return (
    <div>
         <Row xs={1} md={2} lg={3} className="g-4 w-100">
         {RecipeList?.map((recipe) => (
                <Col key={recipe._id}>
                    <RecipeCard
                        recipe={recipe}
                    />
                </Col>
            ))}
         </Row>
    </div>
  )
}

export default RecipeList