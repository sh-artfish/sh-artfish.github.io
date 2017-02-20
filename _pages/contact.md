---
layout: page
title: お問い合わせ
permalink: /contact
order: 6
share: false
---

ご意見、ご質問、メッセージ等々お気軽にお問い合わせください。

## フォームでのお問い合わせ
<form id="inquiry-form" action="https://zf9m7p0bh7.execute-api.ap-northeast-1.amazonaws.com/beta/sendmail" method="POST">

<p>お名前 <span style="color: #ff0000;">(必須)</span><br />
<input type="text" name="name" value="" size="40" required></p>

<p>メールアドレス <span style="color: #ff0000;">(必須)</span><br />
<input type="email" name="email" value="" size="40" required></p>

<p>電話番号 <span style="color: #ff0000;">(必須)</span><br />
<input type="text" name="tel" value="" size="40" maxlength="15" required></p>

<p>お問い合わせ分類 <span style="color: #ff0000;">(必須)</span><br />
<select name="category" required>
    <option disabled selected value> -- select an option -- </option>
    <option value="無料体験授業の申し込み">無料体験授業の申し込み</option>
    <option value="有料体験授業の申し込み">有料体験授業の申し込み</option>
    <option value="欠席･振替えの申請">欠席･振替えの申請</option>
    <option value="アートフィッシュに関する質問">アートフィッシュに関する質問</option>
</select></p>


<p>※体験授業の説明については<a href="{{ site.baseurl }}{% link _pages/guidance_for_joining.md %}" title="入会案内" target="_blank">入会案内</a>をご覧ください</p>


<p>お問い合わせ内容<br />
<textarea name="content" cols="40" rows="10"></textarea></p>

<p><input type="submit" value="送信"></p>
</form>
<div id="inquiry-message"></div>

## お電話でのお問い合わせ

152-2155-3253（シュウ）

<script src="{{ '/assets/js/inquiry.js' | prepend: site.baseurl }}"></script>
