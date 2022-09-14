import React from 'react'
import RecipeCard from "../RecipeCard/RecipeCard";
import { Row, Col } from 'react-bootstrap'

function RecipeList({allRecipes}) {
  return (
    <div >
       
         <Row xs={1} md={2} lg={3} xl={4} className="mx-3 mb-3 mt-3 d-flex justify-content-between">
         {allRecipes?.map((recipe) => (
                <Col className="mt-3" key={recipe._id}>
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