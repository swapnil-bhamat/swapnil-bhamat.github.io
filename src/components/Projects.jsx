import React from 'react';
import { Card, Badge, Row, Col } from 'react-bootstrap';
import { projects } from '../data/projects';

function Projects() {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="projects">
      <div className="w-100">
        <h2 className="mb-5">Key Projects</h2>
        <Row>
            {projects.map((project, index) => (
                <Col md={12} lg={12} key={index} className="mb-4">
                    <Card className="h-100 shadow-sm border-0">
                        <Card.Body>
                            <Card.Title className="font-weight-bold">{project.title}</Card.Title>
                            <Card.Text>{project.description}</Card.Text>
                            <div className="mb-3">
                                {project.technologies.map((tech, tIndex) => (
                                    <Badge bg="primary" className="me-2 p-2" key={tIndex} style={{fontSize: '0.85rem'}}>
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                            {project.impact && (
                                <div className="mt-3">
                                    <h6 className="font-weight-bold text-secondary">Impact:</h6>
                                    <ul>
                                        {project.impact.map((point, pIndex) => (
                                            <li key={pIndex}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
      </div>
    </section>
  );
}

export default Projects;
