<?php

$intro_title = get_field('intro_title');
$intro_text = get_field('intro_text');
$link_url = get_field('link_url');

?>

<h1><?php echo $intro_title; ?></h1>
<p><?php echo $intro_text; ?></p>
<a href="<?php echo $link_url; ?>">Научете повече >></a>
