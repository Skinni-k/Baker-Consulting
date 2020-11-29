import React, { useState } from 'react';
import Card from '../Card';
import styles from './services.module.css';
import product_management from '../../Assets/product_management.jpg';
import proposal_development from '../../Assets/proposal_development.jpg';
import change_management from '../../Assets/change_management.png';
import customer_service from '../../Assets/customer_service.jpg';
import ground_development from '../../Assets/ground_development.jpg';
import Modal from '../Modal';

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  return (
    <section id="section2" className={styles.section}>
      <h1 className={styles.title}>SERVICES</h1>
      <div className={styles.cards}>
        <Card
          img={product_management}
          title={'Product Management'}
          content={
            'Product management is an organisational function within a company dealing with new product development, business justification, planning, verification, forecasting, pricing, product launch, and marketing of a product or products at all stages of the product lifecycle. '
          }
          setIsOpen={setIsOpen}
          setModalContent={setModalContent}
        />
        <Card
          img={proposal_development}
          title={'Proposal Development'}
          content={
            'Proposal Development Process. A Proposal Development Process helps organizations respond to buyer Request for Proposals (RFP). Having an established proposal development process should help ensure organizations develop the best proposal possible that satisfies all the buyers needs and requirements.'
          }
          setIsOpen={setIsOpen}
          setModalContent={setModalContent}
        />

        <Card
          img={change_management}
          title={'Change Management'}
          content={
            'Change management (sometimes abbreviated as CM) is a collective term for all approaches to prepare, support, and help individuals, teams, and organizations in making organizational change. Drivers of change may include the ongoing evolution of technology, internal reviews of processes, crisis response, customer demand changes, competitive pressure, acquisitions and mergers, and organizational restructuring. It includes methods that redirect or redefine the use of resources, business process, budget allocations, or other modes of operation that significantly change a company or organization.'
          }
          setIsOpen={setIsOpen}
          setModalContent={setModalContent}
        />
        <Card
          img={customer_service}
          title={'Customer Service Development'}
          content={
            'Customer service is the provision of service to customers before, during, and after a purchase. The perception of success of such interactions is dependent on employees "who can adjust themselves to the personality of the guest"'
          }
          setIsOpen={setIsOpen}
          setModalContent={setModalContent}
        />
        <Card
          img={ground_development}
          title={'Boots on the Ground Role Development'}
          content={
            'High performing teams collaborate to deliver outstanding results consistently. High performing teams do not come about by accident. High-performing teams take the time to get to know each other individually, take action to build trust across the team, work together to set clear goals, hold each other accountable for meeting these goals, and have a clear set of ground rules that define the required behaviors for the team. They recognize that in order to achieve and maintain high performance levels, the ground rules they define should be created by the team in a collaborative manner.'
          }
          setIsOpen={setIsOpen}
          setModalContent={setModalContent}
        />
      </div>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        modalContent={modalContent}
      />
    </section>
  );
};

export default Services;
