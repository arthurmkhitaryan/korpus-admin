import type { Schema, Attribute } from '@strapi/strapi';

export interface QuestionQuestion extends Schema.Component {
  collectionName: 'components_question_questions';
  info: {
    displayName: 'Question';
    description: '';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.String;
  };
}

export interface PreferenceItemParamsPreferenceItemParams
  extends Schema.Component {
  collectionName: 'components_preference_item_params_preference_item_params';
  info: {
    displayName: 'PreferenceItemParams';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    IsSelectable: Attribute.Boolean & Attribute.Required;
    isFixed: Attribute.Boolean & Attribute.Required;
    value: Attribute.String & Attribute.Required;
    default: Attribute.String;
  };
}

export interface PreferenceItemPreferenceItem extends Schema.Component {
  collectionName: 'components_preference_item_preference_items';
  info: {
    displayName: 'PreferenceItem';
  };
  attributes: {
    name: Attribute.String;
    type: Attribute.String;
    items: Attribute.Component<
      'preference-item-params.preference-item-params',
      true
    >;
  };
}

export interface LearnMoreBlockLearnMore extends Schema.Component {
  collectionName: 'components_learn_more_block_learn_mores';
  info: {
    displayName: 'Learn-More';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface FacadePreferencesFacadePreferences extends Schema.Component {
  collectionName: 'components_facade_preferences_facade_preferences';
  info: {
    displayName: 'FacadePreferences';
  };
  attributes: {
    facade: Attribute.Enumeration<['With', 'Without']> &
      Attribute.Required &
      Attribute.DefaultTo<'With'>;
    type: Attribute.Enumeration<
      ['Smooth', 'Framework', 'Milled', 'Glass', 'Other']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Smooth'>;
    facadeType: Attribute.Enumeration<
      ['Lam. Chipboard', 'Lam. MDF', 'MDF coloring', 'MDF veneer', 'MDF HPL']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Lam. Chipboard'>;
  };
}

export interface AboutQuestionsAboutQuestions extends Schema.Component {
  collectionName: 'components_about_questions_about_questions';
  info: {
    displayName: 'About-Questions';
    description: '';
  };
  attributes: {
    questions: Attribute.Component<'question.question', true>;
    about_questions_image: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface AboutInfoInfoBlock extends Schema.Component {
  collectionName: 'components_info_info_blocks';
  info: {
    displayName: 'InfoBlock';
    description: '';
  };
  attributes: {
    firstContent: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5video.CKEditor5Video',
        {
          preset: 'toolbar';
        }
      >;
    firstImage: Attribute.Media<'images'> & Attribute.Required;
    secondaryContent: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5video.CKEditor5Video',
        {
          preset: 'toolbar';
        }
      >;
    secondaryImage: Attribute.Media<'images'> & Attribute.Required;
    lastContent: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5video.CKEditor5Video',
        {
          preset: 'toolbar';
        }
      >;
    lastImage: Attribute.Media<'images', true> & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'question.question': QuestionQuestion;
      'preference-item-params.preference-item-params': PreferenceItemParamsPreferenceItemParams;
      'preference-item.preference-item': PreferenceItemPreferenceItem;
      'learn-more-block.learn-more': LearnMoreBlockLearnMore;
      'facade-preferences.facade-preferences': FacadePreferencesFacadePreferences;
      'about-questions.about-questions': AboutQuestionsAboutQuestions;
      'about-info.info-block': AboutInfoInfoBlock;
    }
  }
}
