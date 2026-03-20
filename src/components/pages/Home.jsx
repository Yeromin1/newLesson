import Modal from "../Modal/Modal";
import { useToggle } from "../../hooks/useToggle";

export default function Home() {
  const { isOpen, openModal, closeModal } = useToggle();

  return (
    <main>
      <h1>Welcome</h1>
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        alt=""
      />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
        laboriosam placeat incidunt rem illum animi nemo quibusdam quia
        voluptatum voluptate.
      </p>

      <button onClick={openModal}>Open Modal</button>
      {isOpen && <Modal onClose={closeModal} />}
    </main>
  );
}
