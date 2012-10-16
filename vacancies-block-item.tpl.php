<?php
// $Id$

/**
 * @file
 * HTML for an item in the vacancies block listing
 * 
 * Available variables:
 * - $classes: String of classes that can be used to style contextually through
 *   CSS. It can be manipulated through the variable $classes_array from 
 *   preprocess functions. The default values can be one or mere of the following:
 *   - vacancies-block-item: The current template type, i.e, "themeing hook".
 *   - $date: Formatted creation date. Preprocess function can reformat it by
 *            calling format_date() with the desired parameters on the $created 
 *            $variable
 *   - $title: A renderable array that provides a title and link to the node.
 *   - $name: Themed username of the node author output from theme_username().
 * 
 * - $classes_array: Array of html class attirbute values. It is flattend into
 *                   a string within the variable $classes.
 * 
 * Other variables:
 * The following variables are provided for contextual information. ( 'RAW' )
 * - $node: Partial node object cContains data that my not be safe. 
 * - $created: Time the node was published formatted in Unix timestamp.
 * - $user: The user object of the node author.
 * 
 * @see template_preprocess_vacancies_block_item()
 */
// $classes is also set in the template_preprocess() $classes_array.
// to add additional classes just append an array to the $classes_array.
?>
<article id="article-<?php print $node->nid; ?>" class="<?php print $classes ?>">
  <div class="article-inner">
    <div<?php print $content_attributes; ?>>
      <h2<?php print $title_attributes; ?>>
        <?php print render($title); ?>
      </h2>

      <div class="name">
        <?php print t('by !username', array('!username' => $name)); ?>
      </div>
    </div>
  </div>
</article>