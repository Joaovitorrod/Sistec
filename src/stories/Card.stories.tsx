import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Card } from '../components/Card'; // Certifique-se de ajustar o caminho conforme necessário

// Exportação padrão obrigatória
export default {
  title: 'Components/Card', // Caminho na navegação do Storybook
  component: Card,          // Componente principal da story
} as Meta<typeof Card>;

const Template: Story<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Sample Card',
  description: 'This is a sample description for the card component.',
  image: 'https://via.placeholder.com/300x200',
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  title: 'Card Without Image',
  description: 'This card does not include an image.',
};

export const Clickable = Template.bind({});
Clickable.args = {
  title: 'Clickable Card',
  description: 'Clicking this card triggers an action.',
  image: 'https://via.placeholder.com/300x200',
  onClick: () => alert('Card clicked!'),
};
